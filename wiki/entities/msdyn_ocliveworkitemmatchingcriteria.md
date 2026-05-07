---
logical: "msdyn_ocliveworkitemmatchingcriteria"
display: "Conversation Matching Criteria"
entitySetName: "msdyn_ocliveworkitemmatchingcriterias"
primaryId: "msdyn_ocliveworkitemmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Matching Criteria

Contains matching criterias for conversations

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemmatchingcriteria` |
| Display name | Conversation Matching Criteria |
| Display (plural) | Conversation Matching Criterias |
| Schema name | `msdyn_ocliveworkitemmatchingcriteria` |
| Entity set (Web API) | `msdyn_ocliveworkitemmatchingcriterias` |
| Primary id attribute | `msdyn_ocliveworkitemmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias
PATCH /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemmatchingcriterias(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_matchingcriteriaid`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkitemmatchingcriteriaId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocliveworkitemmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_ocliveworkitemmatchingcriteria_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `owner_msdyn_ocliveworkitemmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemmatchingcriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemmatchingcriteria.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemmatchingcriteria.md) on 2026-05-06.