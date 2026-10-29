FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DEFAULT_TIMEOUT=120 \
    PIP_RETRIES=10 \
    PIP_DEFAULT_TIMEOUT=120 \
    PIP_RETRIES=10

WORKDIR /app

RUN addgroup --system app && adduser --system --ingroup app app \
    && mkdir -p /app/data && chown -R app:app /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn whitenoise

COPY --chown=app:app . .

USER app
EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate --noinput && \
     python manage.py collectstatic --noinput && \
     exec gunicorn portfinal.wsgi:application --bind 0.0.0.0:8000 --workers 3"]