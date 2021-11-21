module.exports = () => {
    console.log("Aktif hale Geldim , Emrinizdeyim.");
    client.user.setPresence({ activity: { name: "ALSANCAK" }, status: "idle" });
  }
  module.exports.configuration = {
    name: "ready"
  }