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

Les Ã©vÃ©nements permettent de remonter des informations d'un composant enfant Ã  un composant parent.

```tsx
const App = () => {
    const [name, setName] = useState('toto');

    const handleNameChange = (newName) => {
        setName(newName);
    };

    return (
        <div>
            <ProfName name={name} onNameChange={handleNameChange} />
        </div>
    );
};

const ProfName = (props) => {
    return (
        <div>
            <h1>PrÃ©nom du prof : {props.name}</h1>
            <button onClick={() => props.onNameChange('titi')}>Change name</button>
        </div>
    );
};
```

Cela s'appelle le lifting state up ou la remontÃ©e de l'Ã©tat en franÃ§ais.
