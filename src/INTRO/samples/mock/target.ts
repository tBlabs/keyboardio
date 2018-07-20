export function FunctionWithDependency(dependency, parameter)
{
    let calculationResult = dependency();

    return calculationResult + parameter;
}


export function GeneratePassword(randomValue)
{
    return 
}