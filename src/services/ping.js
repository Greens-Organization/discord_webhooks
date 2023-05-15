import ping from "ping";

export default async function pingHost(hostname) {
  const result = await ping.promise.probe(hostname, {
    timeout: 10,
    // WARNING: -i 2 argument may not work in other platform like windows
    extra: ["-i", "2"],
  });
  return result.alive;
}
