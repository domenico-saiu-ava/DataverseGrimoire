---
logical: "governanceconfiguration"
display: "Governance Configuration"
entitySetName: "governanceconfigurations"
primaryId: "governanceconfigurationid"
primaryName: "scope"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Governance Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `governanceconfiguration` |
| Display name | Governance Configuration |
| Display (plural) | Governance Configurations |
| Schema name | `GovernanceConfiguration` |
| Entity set (Web API) | `governanceconfigurations` |
| Primary id attribute | `governanceconfigurationid` |
| Primary name attribute | `scope` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/governanceconfigurations?$select=scope&$top=10
GET /api/data/v9.2/governanceconfigurations(<guid>)
POST /api/data/v9.2/governanceconfigurations
PATCH /api/data/v9.2/governanceconfigurations(<guid>)
DELETE /api/data/v9.2/governanceconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`configurationtype`, `configurationvalues`, `enabled`, `governanceconfigurationid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `scope`, `scopeid`, `statecode`, `statuscode`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `version`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_governanceconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_governanceconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_governanceconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_governanceconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_governanceconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_governanceconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_governanceconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_governanceconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `governanceconfiguration_SyncErrors` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `governanceconfiguration_DuplicateMatchingRecord` | [governanceconfiguration](governanceconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_governanceconfiguration` |
| `governanceconfiguration_DuplicateBaseRecord` | [governanceconfiguration](governanceconfiguration.md) | `baserecordid` | `baserecordid_governanceconfiguration` |
| `governanceconfiguration_AsyncOperations` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `governanceconfiguration_MailboxTrackingFolders` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `governanceconfiguration_UserEntityInstanceDatas` | [governanceconfiguration](governanceconfiguration.md) | `objectid` | `objectid_governanceconfiguration` |
| `governanceconfiguration_ProcessSession` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `governanceconfiguration_BulkDeleteFailures` | [governanceconfiguration](governanceconfiguration.md) | `regardingobjectid` | `regardingobjectid_governanceconfiguration` |
| `governanceconfiguration_PrincipalObjectAttributeAccesses` | [governanceconfiguration](governanceconfiguration.md) | `objectid` | `objectid_governanceconfiguration` |


## Source

Generated from [governanceconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='governanceconfiguration')) on 2026-05-07.