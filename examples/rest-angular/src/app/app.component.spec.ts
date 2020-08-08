import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from './app.component';

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    await render(AppComponent, {
      imports: [HttpClientModule, ReactiveFormsModule]
    });

    await userEvent.type(screen.getByLabelText(/username/i), 'johnUser');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')
    ).toBeInTheDocument();
    expect(await screen.findByText('John')).toBeInTheDocument();
    expect(await screen.findByText('Maverick')).toBeInTheDocument();
  });
});
