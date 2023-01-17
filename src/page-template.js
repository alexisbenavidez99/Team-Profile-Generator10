const renderTeamPage = teamInfo => {

    const renderManagerInfo = manager => {
        return `
        <div class="employee-card">
        <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h6>
            <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></a></li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
          </div>
        </div>
      </div>`
    };

    const renderEngineerInfo = engineer => {
        return `
        <div class="employee-card">
        <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>`
    };

    const renderInternInfo = intern => {
        return `
        <div class="employee-card">
        <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
          </div>
        </div>
      </div>`
    };

    const htmlPage = [];

    htmlPage.push(teamInfo.filter(employee => employee.getRole() === "Manager").map(manager => renderManagerInfo(manager)));

    htmlPage.push(teamInfo.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineerInfo(engineer)).join(""));

    htmlPage.push(teamInfo.filter(employee => employee.getRole() === "Intern").map(intern => renderInternInfo(intern)).join(""));

    return htmlPage.join("");
}

module.exports = teamInfo => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="header">
            <h1>My Team</h1>
        </div>
        <div class="container">
        <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        ${renderTeamPage(teamInfo)}
        </div>
        </div>
        </div>
    </body>
    </html>`
}