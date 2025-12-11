module.exports = {
    general: {
        language: process.env.RPP_LANGUAGE || 'en',
        pollingIntervalMs: process.env.RPP_POLLING_INTERVAL || 10000,
        showCallStackError: process.env.RPP_LOG_CALL_STACK || false,
        reconnectIntervalMs: process.env.RPP_RECONNECT_INTERVAL || 15000,
    },
    discord: {
        username: process.env.RPP_DISCORD_USERNAME || 'rustplusplus',
        clientId: process.env.RPP_DISCORD_CLIENT_ID || '1448661997955584183',

        // ❗ token už nesmie byť uložený v kóde
        token: process.env.RPP_DISCORD_TOKEN,

        needAdminPrivileges: process.env.RPP_NEED_ADMIN_PRIVILEGES || true,
    }
};
