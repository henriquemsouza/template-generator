
import chalk from 'chalk';

const successMessage  = (message: string): void =>{
    console.log(chalk.green(message));
}

const errorMessage  = (message: string): void =>{
    console.log(chalk.red(message));
}

export {
    successMessage,
    errorMessage
}
