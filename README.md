# Personal Finance


Simple application to control personal finances. Start small and evolve continuously to practice programming.

## Use

Feel free to use this project if you are interested

```bash
git clone https://github.com/edgarslima/personal-finance.git
```

## Database Model

![Image of Yaktocat](https://github.com/edgarslima/personal-finance/blob/master/data-model/model.png?raw=true)


## Database

```sql
mysql

+-------------------+
| Tables in finance |
+-------------------+
| account_type      |
| accounts          |
| budget            |
| budget_group      |
| chart_of_accounts |
| ledger_entries    |
| user              |
| group_user        |
+-------------------+

```


TO DO:

- [x] Database definition
- [x] Database Model
- [x] Database creation and scripting
- [x] Defining the application architecture
- [ ] Backend in node js
    - [x] Structure of controllers and routes
    - [ ] Controllers
        - [x] Users
        - [ ] Group User
        - [x] Account
        - [x] Account Type
        - [ ] Chart of Accounts
        - [ ] Budget Group
        - [ ] Budget
        - [ ] Leadger Entirires 
    - [ ] Implement log in application
    - [ ] Implement JWT in backend module (node js)
- [ ] Backend in C# (in the future for comparisons)
- [ ] ...

### Status
Under construction, little else still working

## License
[MIT](https://choosealicense.com/licenses/mit/)