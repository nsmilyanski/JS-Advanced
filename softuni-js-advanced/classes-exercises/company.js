class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if(this.#checkField(name) || this.#checkField(salary) || this.#checkField(position) ||  this.#checkField(department) || salary > 0) {
            if(!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];
            }
            this.departments[department].push({name, position, salary});
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        throw new Error("Invalid input!");
    }

    bestDepartment() {
        let sb = '';
        let bestDepartmentName = '';
        let bestDepartmentArr = [];
        let startSalary = 0;
        let avSalary = 0;
        for (const [key, value] of Object.entries(this.departments)) {
            let currentSalary = 0;
            value.forEach(element => {
                currentSalary += element.salary;
            });

            if(startSalary < currentSalary) {
                bestDepartmentName = key;
                bestDepartmentArr = value;
                avSalary = currentSalary / value.length;
                startSalary = currentSalary;
            }
        }
        sb += `Best Department is: ${bestDepartmentName}\n`;
        sb += `Average salary: ${avSalary.toFixed(2)}\n`;
        bestDepartmentArr.sort((a, b) => {
            let value = b.salary - a.salary;
            if (value === 0) {
                return a.name.localeCompare(b.name);
            }
            return value;
        })
        .forEach(e => {
            sb += `${e.name} ${e.salary} ${e.position}\n`;
        })
        return sb.trim();

    }
    #checkField(e) {
        if(e ==undefined || e === null || e === '') {
            throw new Error("Invalid input!");
        }
        return true;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
