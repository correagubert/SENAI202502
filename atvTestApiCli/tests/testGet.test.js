// import jsonServer from "json-server";

// let server;
const apiUrl = "http://localhost:3000";

// beforeAll((done) => {
//     const app = jsonServer.create();
//     const router = jsonServer.router("db.json");
//     const middlewares = jsonServer.defaults();

//     app.use(middlewares);
//     app.use(router);

//     server = app.listen(4000, done);
// });

// afterAll((done) => {
//     server.close(done);
// });

test("GET retorna 200", async () => {
    const res = await fetch(`${apiUrl}/usuarios?page=1&limit=20`);
    expect(res.status).toBe(200);
});

test("GET retorna um array", async () => {
    const res = await fetch(`${apiUrl}/usuarios`);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
});

test("POST cria usuário", async () => {
    const novoUsuario = { nome: "Ana Carla 2", email: "ana22@example.com", senha: "12345", cargo: "Médico" };
    const res = await fetch(`${apiUrl}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const data = await res.json();
    expect(data.nome).toBe("Ana Carla 2");

    await fetch(`${apiUrl}/usuarios/${data.id}`, { method: "DELETE" });
});

test("GET retorna usuário válido", async () => {
    const res = await fetch(`${apiUrl}/usuarios/1`);
    const data = await res.json();
    expect(data).toHaveProperty("id", 1);
});

test("PUT atualiza nome do usuário", async () => {
    const res = await fetch(`${apiUrl}/usuarios/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: "Thiago Atualizado" }),
    });
    const retornoApi = await res.json();
    expect(retornoApi.data.nome).toBe("Thiago Atualizado");
});

test("DELETE exclui usuário", async () => {
    await fetch(`${apiUrl}/usuarios/2`, { method: "DELETE" });
    const res = await fetch(`${apiUrl}/usuarios/2`);
    expect(res.status).toBe(404);
});

test("GET retorna 404", async () => {
    const res = await fetch(`${apiUrl}/usuarios/999`);
    expect(res.status).toBe(404);
});

test("POST cria usuário e lista não está vazia", async () => {
    const novoUsuario = { name: "Carlos", email: "carlos@example.com" };
    await fetch(`${apiUrl}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const res = await fetch(`${apiUrl}/usuarios`);
    const data = await res.json();
    // if (data.length > 5) {
    //     await fetch(`${apiUrl}/usuarios/5`, { method: "DELETE" });
    //     const res = await fetch(`${apiUrl}/usuarios/5`);
    //     expect(res.status).toBe(404);
    // }
    expect(data.length).toBeGreaterThan(0);
});
