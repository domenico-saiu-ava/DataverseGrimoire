---
logical: "actioncarduserstate"
display: "ActionCardUserState"
entitySetName: "actioncarduserstates"
primaryId: "actioncarduserstateid"
tableType: "Standard"
ownership: "None"
---

# ActionCardUserState

## Identity

| Property | Value |
| --- | --- |
| Logical name | `actioncarduserstate` |
| Display name | ActionCardUserState |
| Display (plural) | ActionCardUserStates |
| Schema name | `ActionCardUserState` |
| Entity set (Web API) | `actioncarduserstates` |
| Primary id attribute | `actioncarduserstateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/actioncarduserstates?$select=&$top=10
GET /api/data/v9.2/actioncarduserstates(<guid>)
POST /api/data/v9.2/actioncarduserstates
PATCH /api/data/v9.2/actioncarduserstates(<guid>)
DELETE /api/data/v9.2/actioncarduserstates(<guid>)
```

## Attributes

Writable: **10** · Read-only: **5**

### Writable

`ActionCardId`, `ActionCardIdObjectTypeCode`, `ActionCardUserStateId`, `OwnerId`, `OwnerIdType`, `StartDate`, `State`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`ExchangeRate`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `VersionNumber`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActionCardUserState_ActionCard` | [actioncard](actioncard.md) | `actioncardid` | `actioncardid` |
| `ActionCardUserState_Owner` | [owner](owner.md) | `ownerid` | `ownerid` |
| `TransactionCurrency_ActionCardUserState` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |



## Source

Generated from [actioncarduserstate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/actioncarduserstate.md) on 2026-05-06.