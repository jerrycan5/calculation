<script>
function calculation() {
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let num3 = document.getElementById("num3")

    let area = document.getElementById("area")
    let volume = document.getElementById("volume")
    let perimeter = document.getElementById("perimeter")
    let triangle = document.getElementById("triangle")

    area.innerHTML = parseFloat(num1.value * num2.value)


}


</script>