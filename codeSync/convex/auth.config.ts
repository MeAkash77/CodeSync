const authConfig = {
  providers: [
    {
      domain: "https://allowing-mayfly-4.clerk.accounts.dev",
      applicationID: "convex", // <- MUST match "aud" in the JWT
    },
  ],
};

export default authConfig;
