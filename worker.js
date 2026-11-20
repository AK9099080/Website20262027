// Minimal Worker entry point — serves the static assets directory
export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  }
};
