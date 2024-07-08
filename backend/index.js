// Routes
import authRoutes from './src/routes/auth.route.js'
import commentRoutes from './src/routes/comment.route.js'
import tipRoutes from './src/routes/tip.route.js'
import crimeRoutes from './src/routes/crime.route.js'
import announcementRoutes from './src/routes/announcement.route.js'
import reportCrimeRoutes from './src/routes/reportCrime.route.js'
import jobRoutes from './src/routes/job.route.js'

import {appConfig, app} from './config.js'

// * Config of App
appConfig()

app.use('/api/v1/auth', authRoutes)
    .use('/api/v1/comment', commentRoutes)
    .use('/api/v1/tip', tipRoutes)
    .use('/api/v1/crime', crimeRoutes)
    .use('/api/v1/announcement', announcementRoutes)
    .use('/api/v1/reportCrime', reportCrimeRoutes)
    .use('/api/v1/job', jobRoutes)
