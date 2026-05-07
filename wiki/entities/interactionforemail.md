---
logical: "interactionforemail"
display: "Interaction for Email"
entitySetName: "interactionforemails"
primaryId: "interactionforemailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Interaction for Email

## Identity

| Property | Value |
| --- | --- |
| Logical name | `interactionforemail` |
| Display name | Interaction for Email |
| Display (plural) | Interactions for Email |
| Schema name | `InteractionForEmail` |
| Entity set (Web API) | `interactionforemails` |
| Primary id attribute | `interactionforemailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/interactionforemails?$select=name&$top=10
GET /api/data/v9.2/interactionforemails(<guid>)
POST /api/data/v9.2/interactionforemails
PATCH /api/data/v9.2/interactionforemails(<guid>)
DELETE /api/data/v9.2/interactionforemails(<guid>)
```

## Attributes

Writable: **17** · Read-only: **19**

### Writable

`EmailAddress`, `ImportSequenceNumber`, `InteractedComponentText`, `InteractionForEmailId`, `InteractionLocation`, `InteractionRepliedBy`, `InteractionReplyId`, `InteractionUserAgent`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EmailActivityId`, `EmailInteractionReplyId`, `EmailInteractionTime`, `ExchangeRate`, `InteractionPartyId`, `InteractionPartyTypecode`, `InteractionType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_interactionforemail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_interactionforemail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_interactionforemail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_interactionforemail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_interactionforemail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_interactionforemail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_interactionforemail` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_InteractionForEmail` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_interactionforemail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `interactionforemail_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `interactionforemail_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `interactionforemail_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `interactionforemail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `interactionforemail_chats` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [interactionforemail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/interactionforemail.md) on 2026-05-06.