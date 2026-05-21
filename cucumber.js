module.exports = {
  default: {
    require: ['src/fixtures/*.ts', 'src/step-definitions/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
    paths: ['features/*.feature']
  }
};