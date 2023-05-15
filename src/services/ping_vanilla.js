import child_process from "child_process";
import os from "os";

const { spawnSync } = child_process;

export default function ping(host) {
    const result = spawnSync('ping', os.platform() === 'win32' ? ['-n', '1', host] : ['-c', '1', host]);
    const response = result.stdout.toString().includes(os.platform() === 'win32' ? "Received = 1" : "1 received");
    return response === false ? result.stdout.toString() : response;
}
