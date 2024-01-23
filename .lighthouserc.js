module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      collect: {
        numberOfRuns: 5,
      },
    },
    upload: {
      startServerCommand: "npm run dev",
      target: "temporary-public-storage",
    },
  },
};
