import Map "mo:core/Map";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  let certificates = Map.empty<Text, ()>();
  let courseEnrollments = Map.empty<Principal, Set.Set<Text>>();

  public query ({ caller }) func verifyCertificate(id : Text) : async Bool {
    certificates.containsKey(id);
  };

  public shared ({ caller }) func addCertificate(id : Text) : async () {
    if (certificates.containsKey(id)) {
      Runtime.trap("Certificate already exists");
    };
    certificates.add(id, ());
  };

  public shared ({ caller }) func removeCertificate(id : Text) : async () {
    switch (certificates.get(id)) {
      case (null) { Runtime.trap("Certificate not found") };
      case (_) {
        certificates.remove(id);
      };
    };
  };

  public shared ({ caller }) func enrollInCourse(courseId : Text) : async () {
    switch (courseEnrollments.get(caller)) {
      case (null) {
        let newCourseSet = Set.empty<Text>();
        newCourseSet.add(courseId);
        courseEnrollments.add(caller, newCourseSet);
      };
      case (?courseSet) {
        if (courseSet.contains(courseId)) {
          Runtime.trap("Already enrolled in course");
        };
        courseSet.add(courseId);
      };
    };
  };

  public query ({ caller }) func isEnrolledInCourse(courseId : Text) : async Bool {
    switch (courseEnrollments.get(caller)) {
      case (null) { false };
      case (?coursesSet) { coursesSet.contains(courseId) };
    };
  };
};
