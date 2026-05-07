---
logical: "nlsqregistration"
display: "NL2SQ Registration Information"
entitySetName: "nlsqregistrations"
primaryId: "nlsqregistrationid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# NL2SQ Registration Information

Org registration status, AllowedEntity list, and registration error message.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `nlsqregistration` |
| Display name | NL2SQ Registration Information |
| Display (plural) | NL2SQ Registration Information |
| Schema name | `nlsqregistration` |
| Entity set (Web API) | `nlsqregistrations` |
| Primary id attribute | `nlsqregistrationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/nlsqregistrations?$select=name&$top=10
GET /api/data/v9.2/nlsqregistrations(<guid>)
POST /api/data/v9.2/nlsqregistrations
PATCH /api/data/v9.2/nlsqregistrations(<guid>)
DELETE /api/data/v9.2/nlsqregistrations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`AllowedEntityList`, `EntityList`, `ErrorMessage`, `ImportSequenceNumber`, `Name`, `nlsqregistrationId`, `ObjectId`, `ObjectPartitionId`, `ObjectType`, `ObjectTypeDisplayName`, `ObjectTypeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `RegistrationStatus`, `Skill`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_nlsqregistration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_nlsqregistration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_nlsqregistration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_nlsqregistration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_nlsqregistration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_nlsqregistration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_nlsqregistration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_nlsqregistration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [nlsqregistration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/nlsqregistration.md) on 2026-05-06.