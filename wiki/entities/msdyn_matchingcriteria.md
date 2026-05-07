---
logical: "msdyn_matchingcriteria"
display: "Matching Criteria"
entitySetName: "msdyn_matchingcriterias"
primaryId: "msdyn_matchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Matching Criteria

This entity stores custom matching criteria master values

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_matchingcriteria` |
| Display name | Matching Criteria |
| Display (plural) | Matching Criterias |
| Schema name | `msdyn_matchingcriteria` |
| Entity set (Web API) | `msdyn_matchingcriterias` |
| Primary id attribute | `msdyn_matchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_matchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_matchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_matchingcriterias
PATCH /api/data/v9.2/msdyn_matchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_matchingcriterias(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_criteriatype`, `msdyn_matchingcriteriaId`, `msdyn_name`, `msdyn_parentcriteriaid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_matchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_matchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_matchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_matchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_matchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_matchingcriteria_parentcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_parentcriteriaid` | `msdyn_parentcriteriaid` |
| `owner_msdyn_matchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_matchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_matchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | _n/a_ | `msdyn_matchingcriteriaid` | _n/a_ |
| `msdyn_agentmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | _n/a_ | `msdyn_matchingcriteriaid` | _n/a_ |
| `msdyn_matchingcriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_matchingcriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_matchingcriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_matchingcriteria_parentcriteriaid_msdyn_matchingcriteria` | _n/a_ | `msdyn_parentcriteriaid` | _n/a_ |
| `msdyn_matchingcriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_matchingcriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_matchingcriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | _n/a_ | `msdyn_matchingcriteriaid` | _n/a_ |


## Source

Generated from [msdyn_matchingcriteria.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_matchingcriteria.md) on 2026-05-06.