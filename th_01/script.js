function calculate() {
    let amount = prompt("Nhập số tiền: ");
    let rate = prompt("Nhập lãi suất hàng tháng (%)");
    let months = prompt("Nhập số tháng phải trả");
    const interest = (amount * (rate * 0.01)) / months;
    const total = (amount / months + interest).toFixed(2);
    alert("EMI: " + total);
}