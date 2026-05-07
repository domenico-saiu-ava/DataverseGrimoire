---
logical: "msdyn_dailyopportunitykpiitem"
display: "KPI giornalieri per l'opportunità"
entitySetName: "msdyn_dailyopportunitykpiitems"
primaryId: "msdyn_dailyopportunitykpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# KPI giornalieri per l'opportunità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dailyopportunitykpiitem` |
| Display name | KPI giornalieri per l'opportunità |
| Display (plural) | dailyopportunitykpiitems |
| Schema name | `msdyn_dailyopportunitykpiitem` |
| Entity set (Web API) | `msdyn_dailyopportunitykpiitems` |
| Primary id attribute | `msdyn_dailyopportunitykpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dailyopportunitykpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
POST /api/data/v9.2/msdyn_dailyopportunitykpiitems
PATCH /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_dailyopportunitykpiitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_computationaccuracy`, `msdyn_dailyopportunitykpiitemid`, `msdyn_date`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_entityid`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_opportunityid`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dailyopportunitykpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dailyopportunitykpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dailyopportunitykpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dailyopportunitykpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dailyopportunitykpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_opportunity_dailyopportunitykpiitem_entityid` | [opportunity](opportunity.md) | `msdyn_entityid` | `msdyn_entityid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dailyopportunitykpiitem_SyncErrors` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_AsyncOperations` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_MailboxTrackingFolders` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_UserEntityInstanceDatas` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `objectid` | `objectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_ProcessSession` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_BulkDeleteFailures` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_dailyopportunitykpiitem` |
| `msdyn_dailyopportunitykpiitem_PrincipalObjectAttributeAccesses` | [msdyn_dailyopportunitykpiitem](msdyn_dailyopportunitykpiitem.md) | `objectid` | `objectid_msdyn_dailyopportunitykpiitem` |


## Source

Generated from [msdyn_dailyopportunitykpiitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dailyopportunitykpiitem')) on 2026-05-07.