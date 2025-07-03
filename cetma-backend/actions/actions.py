from typing import Any, Dict, List, Text

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionGreetUser(Action):
    """Simple custom action to greet the user."""

    def name(self) -> Text:
        return "action_greet_user"

    def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[Dict[Text, Any]]:
        """Send a greeting message to the user."""
        dispatcher.utter_message(text="Ciao! Come posso aiutarti?")
        return []
