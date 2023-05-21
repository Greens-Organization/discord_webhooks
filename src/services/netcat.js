import child_process from "child_process";

const { exec } = child_process;

/**
 * @param {readonly string} host Hostname or IP of your application
 * @param {readonly string | readonly number} port Responsible port to validate
 * @param {*} callback Callback responsible for processing results verification
 */
export default function ping(host, port, callback) {
  let status = [];
  exec(`netcat -z -v ${host} ${port}`, (err) => {
    if (err !== null) {
      // console.error(err);
      status.push("ERROR");
    } else {
      status.push("OK");
    }

    if (status.length === 1) {
      callback(status);
    }
  });
}
