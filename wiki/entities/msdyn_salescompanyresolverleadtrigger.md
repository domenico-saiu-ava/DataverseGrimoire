---
logical: "msdyn_salescompanyresolverleadtrigger"
display: "Sales Company Resolver Lead Trigger"
entitySetName: "msdyn_salescompanyresolverleadtriggers"
primaryId: "msdyn_salescompanyresolverleadtriggerid"
primaryName: "msdyn_emailaddress"
tableType: "Standard"
ownership: "UserOwned"
---

# Sales Company Resolver Lead Trigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescompanyresolverleadtrigger` |
| Display name | Sales Company Resolver Lead Trigger |
| Display (plural) | Sales Company Resolver Lead Triggers |
| Schema name | `msdyn_SalesCompanyResolverLeadTrigger` |
| Entity set (Web API) | `msdyn_salescompanyresolverleadtriggers` |
| Primary id attribute | `msdyn_salescompanyresolverleadtriggerid` |
| Primary name attribute | `msdyn_emailaddress` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescompanyresolverleadtriggers?$select=msdyn_emailaddress&$top=10
GET /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
POST /api/data/v9.2/msdyn_salescompanyresolverleadtriggers
PATCH /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
DELETE /api/data/v9.2/msdyn_salescompanyresolverleadtriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AgentLastRun`, `msdyn_EmailAddress`, `msdyn_researchagenttriggerdetails`, `msdyn_RetryCount`, `msdyn_SalesCompanyResolverLeadTriggerId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salescompanyresolverleadtrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salescompanyresolverleadtrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescompanyresolverleadtrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescompanyresolverleadtrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescompanyresolverleadtrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salescompanyresolverleadtrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salescompanyresolverleadtrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salescompanyresolverleadtrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescompanyresolverleadtrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescompanyresolverleadtrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescompanyresolverleadtrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescompanyresolverleadtrigger.md) on 2026-05-06.