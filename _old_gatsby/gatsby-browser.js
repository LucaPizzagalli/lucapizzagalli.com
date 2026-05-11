export const onRouteUpdate = ({ location }) => {
  // 1. Only track in production (optional, but recommended)
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // 2. Check if GoatCounter has loaded
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({
      path: location.pathname + location.search + location.hash,
    });
  }
}