const customers = [
  {
    name: "Lê Thị Kiều Linh",
    age: 20,
  },
  {
    name: "Cao Như Uyên",
    age: 20,
  },
  {
    name: "Đặng Thị Phương Nguyên",
    age: 20,
  },
  {
    name: "Trần Thị Anh Thư",
    age: 20,
  },
];
const handleRenderDOM = () => {
  const list_customers = document.querySelector(".list_customers");
  customers.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    list_customers.appendChild(li);
  });
};

handleRenderDOM();
const button = document.querySelector("button");
const randomCustomers = () => {
  const result_random = document.querySelector("#result_random");
  result_random.style.display = "block";
  const result_name = document.querySelector("#result_name");
  const random = Number.parseInt(Math.random() * customers.length);
  const result = customers[random];
  result_name.textContent = result.name;
};

button.addEventListener("click", randomCustomers);

const btn_restart = document.querySelector("#btn_reset");

btn_restart.addEventListener("click", () => {
  const result_random = document.querySelector("#result_random");
  result_random.style.display = "none";
});
