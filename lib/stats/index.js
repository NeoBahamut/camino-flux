const MatomoTracker = require('matomo-tracker')

module.exports = new MatomoTracker(
  process.env.VUE_APP_MATOMO_SITE_ID,
  process.env.VUE_APP_MATOMO_HOST
)
