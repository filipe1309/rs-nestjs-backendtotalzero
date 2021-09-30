db.getSiblingDB("jwtAuthDb").createUser({
    user: "dotr",
    pwd: "123mudar",
    roles: [{ role: "readWrite", db: "totalzero" }],
})
