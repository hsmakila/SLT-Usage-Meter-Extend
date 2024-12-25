console.log("SLT Usage Meter Extend Alive")

loading = setInterval(function () {
    const graphTitle = document.getElementsByClassName("graph-body-title")[0];
    if (graphTitle && graphTitle.innerText.includes("Your speed is")) {
        const progressCount = document.getElementsByClassName("progress-count")[0];
        if (progressCount && progressCount.innerText.includes("%")) {
            loadExtension();
        }
    }
}, 1000); // Checks every 100ms(0.1s)

var today = new Date()

var standardPackage, standardUsage, nightPackage, nightUsage
var packageSpentDays, packageForcastDays
var standardUsageRate, standardForcastRate, nightUsageRate, nightForcastRate

function getStandardPackage() {
	return parseFloat(document.getElementsByClassName("used-of")[0].innerText.split(" ")[4]).toFixed(1)
}
function getStandardUsage() {
	return parseFloat(document.getElementsByClassName("used-of")[0].innerText.split(" ")[0]).toFixed(1)
}
function getNightPackage() {
	var totalPackage = parseFloat(document.getElementsByClassName("used-of")[1].innerText.split(" ")[4])
	return (totalPackage - getStandardPackage()).toFixed(1)
}
function getNightUsage() {
	var totalusage = parseFloat(document.getElementsByClassName("used-of")[1].innerText.split(" ")[0])
	return (totalusage - getStandardUsage()).toFixed(1)
}

function dateDifference(date1, date2) {
	console.log(date1 + "------------------" + date2)
	var Difference_In_Time = date2.getTime() - date1.getTime()
	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

	console.log(Difference_In_Days)
	return Difference_In_Days
}
function getPackageEndDate() {
	var durationText = document.getElementsByClassName("text-center blue")[0].innerText.split(":")[1].split(")")[0]
	durationText = durationText.replace("-", " ") + " " + today.getFullYear()

	var packageEndDate = new Date(Date.parse(durationText));
	if (durationText.toLowerCase().includes("jan") && today.getMonth() == 11) {
		packageEndDate.setFullYear(packageEndDate.getFullYear() + 1)
	}

	return packageEndDate
}
function getPackageStartDate(packageEndDate) {
	var packageStartDate = new Date(packageEndDate.getTime())
	packageStartDate.setMonth(packageStartDate.getMonth() - 1)
	packageStartDate.setDate(packageStartDate.getDate() + 1)

	return packageStartDate
}
function getPackageSpentDays(packageStartDate) {
	return dateDifference(packageStartDate, today)
}
function getPackageForcastDays(packageEndDate) {
	return (dateDifference(today, packageEndDate) + 1)
}

function getStandardUsageRate(standardUsage, packageSpentDays) {
	return (standardUsage / packageSpentDays).toFixed(1)
}
function getStandardForcastRate(standardUsage, standardPackage, packageForcastDays) {
	return ((standardPackage - standardUsage) / packageForcastDays).toFixed(1)
}
function getNightUsageRate(nightUsage, packageSpentDays) {
	return (standardUsage / packageSpentDays).toFixed(1)
}
function getNightForcastRate(nightUsage, nightPackage, packageForcastDays) {
	return ((standardPackage - standardUsage) / packageForcastDays).toFixed(1)
}


function loadData() {
	if (standardPackage == null) {
		console.log("Loading Data...")
		
		standardPackage = getStandardPackage()
		standardUsage = getStandardUsage()
		nightPackage = getNightPackage()
		nightUsage = getNightUsage()

		packageSpentDays = getPackageSpentDays(getPackageStartDate(getPackageEndDate()))
		packageForcastDays = getPackageForcastDays(getPackageEndDate())

		standardUsageRate = getStandardUsageRate(standardUsage, packageSpentDays)
		standardForcastRate = getStandardForcastRate(standardUsage, standardPackage, packageForcastDays)
		nightUsageRate = getNightUsageRate(nightUsage, packageSpentDays)
		nightForcastRate = getStandardForcastRate(nightUsage, nightPackage, packageForcastDays)
	}
}
function updateConsole() {
	console.log("")
	console.log("Standard Package: " + standardPackage)
	console.log("Standard Usage: " + standardUsage)
	console.log("Night Package: " + nightPackage)
	console.log("Night Usage: " + nightUsage)

	console.log("")
	console.log("Package Spent Days: " + packageSpentDays)
	console.log("Package Forcast Days: " + packageForcastDays)

	console.log("")
	console.log("Standard Usage Rate: " + standardUsageRate)
	console.log("Standard Forcast Rate: " + standardForcastRate)
	console.log("Night Usage Rate: " + nightUsageRate)
	console.log("Night Forcast Rate: " + nightForcastRate)
}
function updateGUI() {
	document.getElementsByClassName("progress-count")[0].innerHTML = (standardPackage - standardUsage).toFixed(1) + "GB"

	var newText = standardUsage + " GB USED OF " + standardPackage + " GB<br><br>"
	newText += "Current Rate: " + standardUsageRate + " GB/Day<br>"
	newText += "Forcast Rate: " + standardForcastRate + " GB/Day<br><br>"

	var standardExtra = ((standardPackage - standardUsage) - (standardUsageRate * packageForcastDays)).toFixed(1)

	if (standardExtra > 0)
		newText += "You will lost: " + standardExtra + " GB<br>"
	else
		newText += "You will need: " + (standardExtra * -1) + " GB<br>"
	document.getElementsByClassName("used-of")[0].innerHTML = newText


	if (document.getElementsByClassName("progress-count").length > 1) {
		document.getElementsByClassName("name")[1].innerHTML = "Night"
		document.getElementsByClassName("progress-count")[1].innerHTML = (nightPackage - nightUsage).toFixed(1) + "GB"

		var newText = nightUsage + " GB USED OF " + nightPackage + " GB<br><br>"
		newText += "Current Rate: " + nightUsageRate + " GB/Day<br>"
		newText += "Forcast Rate: " + nightForcastRate + " GB/Day<br><br>"

		var nightExtra = ((nightPackage - nightUsage) - (nightUsageRate * packageForcastDays)).toFixed(1)

		if (nightExtra > 0)
			newText += "You will lost: " + nightExtra + " GB<br>"
		else
			newText += "You will need: " + (nightExtra * -1) + " GB<br>"
		document.getElementsByClassName("used-of")[1].innerHTML = newText
	}
}

function loadExtension() {
	console.log("Loading Extention...")
	loadData()
	updateConsole()
	updateGUI()
}