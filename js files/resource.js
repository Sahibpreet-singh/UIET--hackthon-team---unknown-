document.getElementById("resourceForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const materialName = document.getElementById("event-material").value;
    const quantity = document.getElementById("quantity").value;

    const resourceData = { materialName, quantity };

    try {
        const response = await fetch("http://localhost:3000/resources", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resourceData),
        });

        const result = await response.json();
        if (response.ok) {
            alert("Resource added successfully!");
            document.getElementById("eventForm").reset(); // Clear form after submission
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Failed to connect to the server");
    }
});
