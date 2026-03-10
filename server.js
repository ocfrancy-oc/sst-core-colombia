const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://admin_sst:wPj97HzzyEAWpTN0fnvgOtFPCMhhi48K@dpg-d6nrt8vafjfc73algh90-a.virginia-postgres.render.com/sst_db_iw2x',
  ssl: {
    rejectUnauthorized: false
  }
});