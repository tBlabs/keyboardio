import { FunctionWithDependency } from "./target";
import { Dependency } from "../jest_mock/dependency";
import { DependencyMock } from "./mock";

test.skip('impossible to test', () =>
{
    let result = FunctionWithDependency(Dependency, 2);

    expect(result).toBe("???");
}); 


test('easy to test', () =>
{
    let result = FunctionWithDependency(DependencyMock, 2);

    expect(result).toBe(10);
}); 