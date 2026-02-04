import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  let certificates = Map.empty<Text, ()>();

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
    if (not certificates.containsKey(id)) {
      Runtime.trap("Certificate does not exist");
    };
    certificates.remove(id);
  };
};
