module.exports = () => {
    console.log("Aktif hale Geldim , Emrinizdeyim.");
    client.user.setPresence({ activity: { name: "ainsworth" }, status: "idle" });
  }
  module.exports.configuration = {
    name: "ready"
  }