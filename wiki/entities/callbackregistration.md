---
logical: "callbackregistration"
display: "Callback Registration"
entitySetName: "callbackregistrations"
primaryId: "callbackregistrationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Callback Registration

Callback Registration that stores configuration.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `callbackregistration` |
| Display name | Callback Registration |
| Display (plural) | Callback Registrations |
| Schema name | `CallbackRegistration` |
| Entity set (Web API) | `callbackregistrations` |
| Primary id attribute | `callbackregistrationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/callbackregistrations?$select=name&$top=10
GET /api/data/v9.2/callbackregistrations(<guid>)
POST /api/data/v9.2/callbackregistrations
PATCH /api/data/v9.2/callbackregistrations(<guid>)
DELETE /api/data/v9.2/callbackregistrations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **11**

### Writable

`CallbackRegistrationId`, `EntityName`, `FilterExpression`, `FilteringAttributes`, `HardDelete`, `LogicAppsVersion`, `Message`, `Name`, `OwnerId`, `OwnerIdType`, `PostponeUntil`, `RunAs`, `RuntimeIntegrationProperties`, `Scope`, `SdkMessageName`, `SoftDeleteStatus`, `Url`, `Version`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessunit_callbackregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_callbackregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `callbackregistration_createdby` |
| `lk_callbackregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `callbackregistration_createdonbehalfby` |
| `lk_callbackregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `callbackregistration_modifiedby` |
| `lk_callbackregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `callbackregistration_modifiedonbehalfby` |
| `owner_callbackregistration` | [owner](owner.md) | `ownerid` | `ownerid` |



## Source

Generated from [callbackregistration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/callbackregistration.md) on 2026-05-06.