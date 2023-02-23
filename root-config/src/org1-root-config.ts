import singleSpa, {
  registerApplication,
  start,
  getMountedApps,
} from "single-spa";

registerApplication({
  name: "@org1/react-app",
  app: () => System.import("@org1/react-app"),
  activeWhen: () => true,
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
const mountedAppNames = getMountedApps();
// eslint-disable-next-line no-console
console.log(mountedAppNames);
