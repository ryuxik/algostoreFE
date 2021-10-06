# syntax=docker/dockerfile:1
FROM public.ecr.aws/lambda/python:3.8
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY algo_lambda.py ./
CMD ["algo_lambda.handler"]
