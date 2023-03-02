import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays the primary language of the repository', () => {

    const repository = {
        language: 'JavaScript',
        stargazers_count: 10,
        open_issues: 5,
        forks: 2
    }

    render(<RepositoriesSummary repository={repository} />);

    const language = screen.getByText('JavaScript');
    expect(language).toBeInTheDocument();

});

test('displays information about the repository', () => {

    const repository = {
        language: 'JavaScript',
        stargazers_count: 10,
        open_issues: 5,
        forks: 2
    }


    render(<RepositoriesSummary repository={repository} />);
/* 
    const language = screen.getByText('JavaScript');
    expect(language).toBeInTheDocument();

    const stars = screen.getByText('10');
    expect(stars).toBeInTheDocument(); */

    for (let key in repository) {
        const value =repository[key];
        //const element = screen.getByText(value);
        const element = screen.getByText(new RegExp(value, 'i'));
        expect(element).toBeInTheDocument();
    }

    
});
