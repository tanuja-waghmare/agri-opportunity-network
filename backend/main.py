from fastapi import FastAPI

app = FastAPI(title="Agri Opportunity Network")


@app.get("/")
def home():
    return {"message": "Agri Opportunity Network API is running!"}