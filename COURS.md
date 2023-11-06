# Communication entre composants

## Les propriÃ©tÃ©s

Parent -> Enfant

Les propriÃ©tÃ©s sont des donnÃ©es qui sont passÃ©es d'un composant parent Ã  un composant enfant.

```tsx
const App = () => {
    return (
        <div>
            <ProfName name="toto" />
        </div>
    );
};

const ProfName = (props) => {
    return (
        <div>
            <h1>PrÃ©nom du prof : {props.name}</h1>
        </div>
    );
};
```

## Les Ã©vÃ©nements

Enfant -> Parent

Les événements permettent de remonter des informations d'un composant enfant à un composant parent.

```tsx
const App = () => {
    const [name, setName] = useState('toto');

    const handleNameChange = (newName: string) => {
        setName(newName);
    };

    return (
        <div>
            <ProfName onNameChange={handleNameChange} />
            <p>{name}</p>
        </div>
    );
};

const ProfName = (props: { onChange: (val: string) => void }) => {

    const handleNameChange = useCallback(
        () => {
            props.onNameChange('titi');
        }, [props.onNameChange]
    );

    return (
        <div>
            <button onClick={handleNameChange}>Change name</button>
        </div>
    );
};
```

Cela s'appelle le lifting state up ou la remontée de l'état en français.
