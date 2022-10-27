export default class CircuitModel {
    static getCircuitData(id) {
        return fetch(`http://localhost:8000/circuit/${id}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include",
        }).then(res => res.json())
    }
}