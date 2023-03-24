# Specify a base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR / .

# Copy the rest of the application code to the working directory
COPY . .

# Install the dependencies
RUN npm install

EXPOSE 5000

# Set the command to run the application
CMD [ "npm", "start" ]



# FROM python:3.9

# WORKDIR /.
# ADD . /
# RUN pip install -r requirements.txt

# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]