const MatomoTracker = require('matomo-tracker')

module.exports =
  process.env.MATOMO_SITE_ID && process.env.MATOMO_HOST
    ? new MatomoTracker(process.env.MATOMO_SITE_ID, process.env.MATOMO_HOST)
    : null
