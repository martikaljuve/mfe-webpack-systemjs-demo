export async function loadFederatedModule(name) {
  const [remote, moduleName] = name.split("/", 2);
  const container = await System.import(remote);
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get("./" + moduleName);
  return factory();
}
