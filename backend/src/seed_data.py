from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Internship  # Assuming you have a models.py file with an Internship model

DATABASE_URL = "sqlite:///internships.db"

def seed_internships():
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)
    session = Session()

    internships = [
        Internship(title="Data Science Intern", description="Analyze data and build models.", company="Tech Corp", location="Remote"),
        Internship(title="Software Engineering Intern", description="Develop and maintain software applications.", company="Innovate Inc", location="On-site"),
        Internship(title="Marketing Intern", description="Assist in marketing campaigns and strategies.", company="Market Solutions", location="Remote"),
        Internship(title="Product Management Intern", description="Support product development and management.", company="Product Co", location="On-site"),
        Internship(title="UX/UI Design Intern", description="Design user interfaces and improve user experience.", company="Design Studio", location="Remote"),
    ]

    session.bulk_save_objects(internships)
    session.commit()
    session.close()

if __name__ == "__main__":
    seed_internships()