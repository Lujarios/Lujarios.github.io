# Use an official Jekyll image from Docker Hub
FROM jekyll/jekyll:latest

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Copy your local files into the container
COPY . .

# Install dependencies (assuming you’re using a Gemfile with Jekyll)
RUN bundle install

# Command to run when the container starts
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
